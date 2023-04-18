export const server = (done) => {
	//Запускаем браузер
	app.plugins.browsersync.init({
		server: {
			//Базовая папка откуда нужно запустить файлы (папка с результатом проекта)
			baseDir: `${app.path.build.html}`
		},
		notify: false,
		port: 3000,
	});
}