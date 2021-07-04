class ClassName {
    /**
     *
     * @param {module} do DO SDK
     * @param {object} options SDK options
     */
    constructor(dosdk, dotoken) {
      this._DO = dosdk;
      this._instance = new this._DO(dotoken);
      this._sdkClassName=this._instance.SDKClassName;
    }
  
    function() {
      return new Promise((resolve, reject) => {
        this._sdkClassName.SDKFunctionName()
        .then(data => resolve(data))
        .catch(err => reject(err));
      });
    }
  }
  
module.exports = ClassName;