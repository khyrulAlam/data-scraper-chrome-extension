import "./main.css";
window.onload = function() {
  let iframe = document.querySelector("#iframe");
  iframe.classList.add(`tab${location.search.match(/id=([^&]*)/i)[1]}`);
  iframe.innerHTML = `
    
  <ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item">
      <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home"
          aria-selected="true">Start</a>
  </li>
  <li class="nav-item">
      <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile"
          aria-selected="false">Cols</a>
  </li>
  <li class="nav-item">
      <a class="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact"
          aria-selected="false">Preview & Save </a>
  </li>
</ul>
<div class="tab-content" id="myTabContent">
  <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
      <div class="schema-name">
          <div class="form-group">
              <input type="text" class="form-control" id="schemaName" placeholder="schemaName">
          </div>
          <div class="form-row">
              <div class="col-12">
                  <input type="text" class="form-control" name="rowName" placeholder="Row Name">
              </div>
              <div class="col-9">
                  <input type="text" class="form-control" name="rowCls" placeholder="Class Name">
              </div>
              <div class="col-3">
                  <button type="button" class="btn btn-primary" id="startPickMouse">Drag</button>
              </div>
          </div>
          <div class="checkbox-dom">
          </div>
      </div>
  </div>
  <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
      <div>
          <div class="form-row colNum1">
              <div class="col-12">
                  <input type="text" class="form-control" name="colName" placeholder="Column Name">
              </div>
              <div class="col-9">
                  <input type="text" class="form-control" name="colCls" placeholder="Class Name">
              </div>
              <div class="col-3">
                  <button type="button" class="btn btn-primary mouseMove-col" data-col="colNum1">Drag</button>
              </div>
              <div class="class-checkbox-dom">
              </div>
          </div>
          <div id="addAnotherDom"></div>
          <div>
              <button type="button" class="btn btn-success mt-3" id="addMoreCol">ADD ANOTHER</button>
          </div>
      </div>
  </div>
  <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
      <div>
          <button type="button" class="btn btn-warning mb-2" id="jalalRun">Run</button>
          <button type="button" class="btn btn-success mb-2" id="saveSchema">Save Schema</button>
      </div>
      <div id="resultTable"></div>
  </div>
</div>

  
  `;
};
