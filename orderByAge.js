var arrayObj = [{'name': 'Bruno', 'age': 26}, {'name': 'Bruna', 'age': 22}, {'name': 'Deborah', 'age': 19}];

function orderByAge(a,b) {
  if (a.age < b.age)
    return -1;
  if (a.age > b.age)
    return 1;
  return 0;
}

arrayObj.sort(orderByAge);
