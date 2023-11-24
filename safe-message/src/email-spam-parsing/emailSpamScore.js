function evaluateSpamScore(score) {
  switch (score) {
    case 0:
      return "Very low likelyhood of spam.";
    case 1:
      return "Low likelyhood of spam.";
    case 2:
      return "Low likelyhood of spam.";
    case 3:
      return "Moderate likelyhood of spam.";
    case 4:
      return "High likelyhood of spam.";
    case 5:
      return "High likelyhood of spam.";
    case 6:
      return "Very high likelyhood of spam.";
    default:
      return "";
  }
}

module.exports = { evaluateSpamScore };
