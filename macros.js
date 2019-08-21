// ![:scale 80% 300px](/img/test.png)
remark.macros.scale = function (width, height) {
  let url = this;
  let w = width || '100%'
  let h = height || 'auto'

  return '<img src="' + url + '" style="width: ' + w + '; height: ' + h + '" />';
};
