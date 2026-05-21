import * as assert from 'assert';
import * as vscode from 'vscode';

suite('Extension Integration Tests', () => {
	test('Extension should be present', () => {
		assert.ok(vscode.extensions.getExtension('your-publisher-name.your-extension-name'));
	});

	test('Extension should activate', async () => {
		const ext = vscode.extensions.getExtension('your-publisher-name.your-extension-name');
		await ext.activate();
		assert.strictEqual(ext.isActive, true);
	});

	test('Hello World command should be registered', async () => {
		const commands = await vscode.commands.getCommands();
		assert.ok(commands.includes('extension.helloWorld'));
	});
});
