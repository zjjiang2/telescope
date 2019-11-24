/**
 * Something to get us started, nothing sacred here, everything can change!
 */

const feedQueue = require('./feed-queue');
const feedWorker = require('./feed-worker');
const wikiFeed = require('./wiki-feed-parser');

// Start the web server
require('./backend/web/server');

/**
 * Adds feed URL jobs to the feed queue for processing
 * @param {Array[Object]} feedJobs - list of feed URL jobs to be processed
 */
async function enqueueWikiFeed() {
  wikiFeed.parseData().then(data => {
    data.forEach(async feedJob => {
      console.log(`Enqueuing Job - ${feedJob.url}`);
      await feedQueue.add(feedJob, {
        attempts: 8,
        backoff: {
          type: 'exponential',
          delay: 60 * 1000,
        },
        removeOnComplete: true,
        removeOnFail: true,
      });
    });
  });
}

enqueueWikiFeed()
  .then(() => {
    feedWorker.start();
  })
  .catch(error => {
    console.log(error);
  });
