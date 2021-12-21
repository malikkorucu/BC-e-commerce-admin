import React from 'react';
import FileUploader from 'devextreme-react/file-uploader';
import ProgressBar from 'devextreme-react/progress-bar';

export class Dropzone extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isDropZoneActive: false,
      imageSource: '',
      textVisible: true,
      progressVisible: false,
      progressValue: 0,
    };
    this.allowedFileExtensions = ['.jpg', '.jpeg', '.gif', '.png'];
    this.onDropZoneEnter = this.onDropZoneEnter.bind(this);
    this.onDropZoneLeave = this.onDropZoneLeave.bind(this);
    this.onUploaded = this.onUploaded.bind(this);
    this.onProgress = this.onProgress.bind(this);
    this.onUploadStarted = this.onUploadStarted.bind(this);
  }

  render() {
    const {
      isDropZoneActive, imageSource, textVisible, progressVisible, progressValue,
    } = this.state;
    return (
      <div className="widget-container flex-box">
        <span style={{fontSize:'bold'}}>Ürün Fotoğrafı</span>
        <div id="dropzone-external" style={{minHeight:150 , border:'2px solid red' , cursor:'pointer'}} className={`align-items-center d-flex justify-content-center flex-box ${isDropZoneActive ? 'dx-theme-accent-as-border-color dropzone-active' : 'dx-theme-border-color'}`}>
          {imageSource && <img id="dropzone-image" src={imageSource} alt="" />}
          {textVisible
          && <div id="dropzone-text" className="flex-box">
             Ürün Resmini yüklemek için tıklayınız veya sürükleyiniz
          </div>}
          <ProgressBar
            id="upload-progress"
            min={0}
            max={100}
            width="30%"
            showStatus={false}
            visible={progressVisible}
            value={progressValue}
          ></ProgressBar>
        </div>
        <FileUploader
          id="file-uploader"
          dialogTrigger="#dropzone-external"
          dropZone="#dropzone-external"
          multiple={false}
          allowedFileExtensions={this.allowedFileExtensions}
          uploadMode="instantly"
          uploadUrl="https://js.devexpress.com/Demos/NetCore/FileUploader/Upload"
          visible={false}
          onDropZoneEnter={this.onDropZoneEnter}
          onDropZoneLeave={this.onDropZoneLeave}
          onUploaded={this.onUploaded}
          onProgress={this.onProgress}
          onUploadStarted={this.onUploadStarted}
        ></FileUploader>
      </div>
    );
  }

  onDropZoneEnter(e) {
    if (e.dropZoneElement.id === 'dropzone-external') {
       this.setState({ isDropZoneActive: true });
    }
  }

  onDropZoneLeave(e) {
    if (e.dropZoneElement.id === 'dropzone-external') {
      this.setState({ isDropZoneActive: false });
    }
  }

  onUploaded(e) {
    const { file } = e;
    const fileReader = new FileReader();
    fileReader.onload = () => {
      this.setState({
        isDropZoneActive: false,
        imageSource: fileReader.result,
      });
    };
    fileReader.readAsDataURL(file);
    this.setState({
      textVisible: false,
      progressVisible: false,
      progressValue: 0,
    });
  }

  onProgress(e) {
    this.setState({ progressValue: (e.bytesLoaded / e.bytesTotal) * 100 });
  }

  onUploadStarted() {
    this.setState({
      imageSource: '',
      progressVisible: true,
    });
  }
}