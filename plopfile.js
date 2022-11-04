export default function plopfile(plop) {
	return (
		// controller generator
		plop.setGenerator('controller', {
			description: 'application controller logic',
			prompts: [{
				type: 'input',
				name: 'name',
				message: 'controller name please'
			}],
			actions: [{
				type: 'add',
				path: 'src/components/{{name}}/{{name}}.js',
				templateFile: 'src/plop-template/index.js'
			}
				,
			{
				type: 'add',
				path: 'src/components/{{name}}/{{name}}.css',
				templateFile: 'src/plop-template/index.css'
			}],

		})
	)
};