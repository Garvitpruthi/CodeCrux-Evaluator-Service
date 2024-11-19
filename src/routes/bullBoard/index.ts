import { createBullBoard } from '@bull-board/api';
import { BullMQAdapter } from '@bull-board/api/bullMQAdapter';
import { ExpressAdapter } from '@bull-board/express';

import SampleQueue from '../../queues/sampleQueue';

const serverAdapter = new ExpressAdapter();
serverAdapter.setBasePath('/admin/queues');


createBullBoard({
    queues: [ new BullMQAdapter(SampleQueue)],
    serverAdapter: serverAdapter,
});

const bullBoardRouter = serverAdapter.getRouter();
export default bullBoardRouter;