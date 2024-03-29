import MindsDB, { Model, type ModelPrediction } from 'mindsdb-js-sdk';
import connect from '$lib/server/minds';
import type { PageServerLoad } from './$types';
// import prisma from '$lib/server/prisma';
import { createStory } from '$lib/actions/createStory';
import { MINDSDB_PROJECT, MYSQL_DATABASE } from '$env/static/private';

// @ts-expect-error - Type and default import conflict
const Minds = MindsDB.default;

type SummarizationResponseData = {
	id: string;
	userid: string;
	title: string;
	content: string;
	summary: string;
};

export const load: PageServerLoad = async () => {
	try {
		await connect();

		const summarizationModel: Model = await Minds.Models.getModel(
			'text_summarization_model',
			MINDSDB_PROJECT
		);
		const response = await summarizationModel.batchQuery({
			join: `${MYSQL_DATABASE}.Story`
		});

		const storiesWithSummary = response.map((item: ModelPrediction) => {
			const itemData = item.data as SummarizationResponseData;

			return {
				id: itemData?.id,
				userId: itemData?.userid,
				title: itemData?.title,
				content: itemData?.content,
				summary: itemData?.summary
			};
		});

		console.log(storiesWithSummary);

		return { stories: storiesWithSummary };
	} catch (error) {
		console.error('Failed to load stories:', error);
	}
};

export const actions = {
	createStory
};
