import * as vscode from 'vscode';

/**
 * Called when the extension is activated
 * @param {vscode.ExtensionContext} context
 */
export function activate(context) {
	console.log('Your extension is now active!');

	// Register a command
	const disposable = vscode.commands.registerCommand('extension.helloWorld', () => {
		vscode.window.showInformationMessage('Hello World from your extension!');
	});

	context.subscriptions.push(disposable);
}

/**
 * Called when the extension is deactivated
 */
export function deactivate() {}
