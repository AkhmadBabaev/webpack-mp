const path = require('path');

class Dirs {
  constructor() {
    this._init();
  }

  _init() {
    this._addDir({ name: 'input', folder: 'src', rel: '../' });
    this._addDir({ name: 'output', folder: 'dist', rel: '../' });
    this._addDir({ name: 'public', rel: '../' });
    this._addDir({ name: 'assets', parent: this.input.path });
    this._addDir({ name: 'components', parent: this.input.path });
    this._addDir({ name: 'pages', parent: this.input.path });
    this._addDir({ name: 'styles', parent: this.assets.path });
    this._addDir({ name: 'images', parent: this.assets.path });
    this._addDir({ name: 'fonts', parent: this.assets.path });
    this._addDir({ name: 'favicons', parent: this.images.path });
  }

  _addDir({
    name,
    folder,
    parent = __dirname,
    rel,
  }) {
    const folderName = folder || name;
    const relName = `${rel}${folderName}`;
    const folderPath = path.resolve(parent, rel ? relName : folderName);

    this[name] = { name: folderName, path: folderPath };
    rel && (this[name].relName = relName);
  }
}

module.exports = new Dirs();
