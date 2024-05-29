interface RecordValue {
  value: number,
  timesUpdated: number,
}

interface Records {
  max: RecordValue,
  min: RecordValue
}

function updateRecord(record: RecordValue, score: number) {
  record.value = score;
  record.timesUpdated++;
}

function breakingRecords(scores: number[]): number[] {
  const result: number[] = [];
  const records: Records = {
    max: {
      value: 0,
      timesUpdated: 0
    },
    min: {
      value: 0,
      timesUpdated: 0
    }
  };

  for (let i = 0; i < scores.length; i++) {
    if (i === 0) {
      records.max.value = scores[i];
      records.min.value = scores[i];
    }
    const maxWasBroken = scores[i] > records.max.value;
    const minWasBroken = scores[i] < records.min.value;

    if (maxWasBroken) {
      updateRecord(records.max, scores[i]);
    }
    if (minWasBroken) {
      updateRecord(records.min, scores[i]);
    }
  }

  const {
    max: { timesUpdated: max },
    min: { timesUpdated: min }
  } = records;

  return [max, min];
}


console.log(breakingRecords([3, 4, 21, 36, 10, 28, 35, 5, 24, 42]));
console.log(breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1]));

