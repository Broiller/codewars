/*
Write function RemoveExclamationMarks which removes all exclamation marks from a given string.
*/

function removeExclamationMarks(s) {
  let str = s.replace(/!/g, "")
  return str;
}
