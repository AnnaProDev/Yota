import { deleteAsync } from "del";
import zipPlugin from "gulp-zip";

export const zip = () => {
	//Удаляем архив, если существует
	deleteAsync(`./${app.path.rootFolder}.zip`)
	//Обращаемся к папке с результатом получаем все файлы любого уровня вложенности
	return app.gulp.src(`${app.path.buildFolder}/**/*.*`, {})
	.pipe(app.plugins.plumber(
		app.plugins.notify.onError({
			title: "JS",
			message: "Error: <%= error.message %>"
		}))
	)
		.pipe(zipPlugin(`${app.path.rootFolder}.zip`))
	//Выводим результат
	.pipe(app.gulp.dest(`./`))
}