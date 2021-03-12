const { Viewer, LoaderOverlay, ViewType } = require('@xbim/viewer');

function loadViewer(canvasId, model) {
    var check = Viewer.check();
    if(check.noErrors) {

        console.log('Viewer is good to go');
        
        var viewer = new Viewer(canvasId);
        var overlay = new LoaderOverlay();
        viewer.addPlugin(overlay);
        overlay.show();
        
        viewer.on('loaded', () => {
            viewer.start();
            overlay.hide();
            viewer.show(ViewType.DEFAULT, undefined, undefined, false);
        });
        
        viewer.load(model, "base");
        
    } else {
        console.warn('Failed to load viewer', check.errors);
    }
}