// function getTempCallback(location, callback) {
//   callback(undefined, 78);
//   callback('City not find')
// }
//
// getTempCallback('Philadephia', function (err, temp) {
//   if (err) {
//     console.log('error', err);
//   } else {
//     console.log('success', temp);
//   }
// });
//
// function getTempPromise (location) {
//   return new Promise(function (resovle, reject) {
//     setTimeout(function () {
//       resovle(79);
//       reject('City not found lol');
//     },
//     1000
//     );
//   });
// }
//
// getTempPromise('Philadephia').then(function (temp) {
//   console.log('Promise success', temp);
// }, function (err) {
//   console.log('Promise error', err);
// });

function addPromise (a, b) {
  return new Promise( function (resovle, reject) {
      setTimeout(function () {
        if (typeof a === 'number' && typeof b === 'number') {
          resovle(a + b);
        } else {
          reject("Invalid format, a & b need to be numbers");
        }
      }, 1000);
    }
  );
}

addPromise('3', 4).then(function (result) {
  console.log('Promise success', result);
}, function (err) {
  console.log('Promise error', err);
});
