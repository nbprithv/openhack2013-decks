self.addEventListener('message', function(e) {
  var data = e.data;
  switch (data.cmd) {
    case 'start':
      self.postMessage({'msg':'WORKER STARTED'});
      break;
    case 'stop':
      self.postMessage({'msg':'WORKER STOPPED'});
      self.close; //or call worker.terminate(); from the main window.
      break;
    case 'get':
      self.postMessage({'msg':'Got message'});
      break;
    default:
      self.postMessage({'msg':'Unknown command'});
      break;
  };
}, false);
