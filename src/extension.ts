import * as vscode from 'vscode';
import { sampleCommand } from './commands/sampleCommand';
import { ext } from './extensionVariables';

export function activate(context: vscode.ExtensionContext) {
    ext.context = context;
    ext.outputChannel = vscode.window.createOutputChannel('sample');

    vscode.commands.registerCommand('sample.sampleCommand', sampleCommand);
}