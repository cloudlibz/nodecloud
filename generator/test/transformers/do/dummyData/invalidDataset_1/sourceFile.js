class ClassName {

  constructor(dosdk, dotoken) {
    this._DO = dosdk;
    this._instance = new this._DO(dotoken);
    this._sdkClassName=this._instance.SDKClassName;
  }
  
}

module.exports = ClassName;