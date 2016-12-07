import angular from 'angular';

// create the module where our functionality can attach to
let editorModule = angular.module('app.editor', []);

// include our UI-Router config settings
import EditorConfig from './editor.config';
editorModule.config(EditorConfig);

// controllers
import EditorCtrl from './editor.controller';
editorModule.controller('EditorCtrl', EditorCtrl);

export default editorModule;