function Get(jsonFile) {
  const xhr = new XMLHttpRequest();

  xhr.open('Get', String(jsonFile), true);

  xhr.send();

  xhr.onreadystatechange = function processing() {
    if (xhr.readyState !== 4) return;

    if (xhr.status !== 200) {
      console.log(`${xhr.status}:${xhr.statusText}`);
    } else {
      console.log(xhr.responseText);
    }
  };
}

function Post(jsonFile) {
  const xhr = new XMLHttpRequest();

  xhr.open('Post', String(jsonFile), true);

  xhr.send();

  xhr.onreadystatechange = function processing() {
    if (xhr.readyState !== 4) return;

    if (xhr.status !== 200) {
      console.log(`${xhr.status}:${xhr.statusText}`);
    } else {
      console.log(xhr.responseText);
    }
  };
}

Get('task-02.js');
Post('task-02.js');
