import { getMessageBroker } from './app';
import { demoController } from './demo/demo.controller';

(async () => {
	const app = await getMessageBroker();
	console.log('Application initialized');
	demoController.implement(app);
})();
