exportfunction taskFirst() {
  const task = 'I prefer const when I can.';
  return task;
}

exportfunction getLast() {
  return ' is okay';
}

exportfunction taskNext() {
  let combination = 'But sometimes let';
  combination += getLast();

  return combination;
}
