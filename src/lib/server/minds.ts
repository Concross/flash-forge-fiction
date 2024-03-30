import MindsDB from 'mindsdb-js-sdk';
import { MINDSDB_HOST, MINDSDB_PORT } from '$env/static/private';

const connect = async () => {
	try {
		// @ts-expect-error - TS is forcing the connection options to have a user and password which are not required when running locally
		await MindsDB.default.connect({
			host: `http://${MINDSDB_HOST}:${MINDSDB_PORT}`
		});

		console.log('Connected to MindsDB');
	} catch (error) {
		console.error('Failed to connect to MindsDB:', error);
	}
};

export default connect;
