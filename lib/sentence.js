'use strict';

const countSentences = function (text) {
  if (!text) return 0;

  // Match sentence enders: ., ?, !
  const matches = text.match(/[.!?]/g);
  return matches ? matches.length : 0;
};

module.exports = countSentences;
