//Получаем имя папки проекта
import * as nodePath from "path";
const rootFolder = nodePath.basename(nodePath.resolve())

//Папка которая будет выгружаться на сервер для демонстрации 
const buildFolder = `./dist`;
//Переменная с папкой исходников 
const srcFolder = `./src`;
//Переменная с объектами, которые содержат различные пути к файлам и папкам
export const path = {
	//Пути вывода, куда Gulp выгружает обработанные файлы
	build: {
		js: `${buildFolder}/js/`,
		css: `${buildFolder}/css/`,
		html: `${buildFolder}/`,
		images: `${buildFolder}/img/`,
		fonts: `${buildFolder}/fonts/`,
		files: `${buildFolder}/files/`
	},
	//Объект путей с исходными данными
	src: {
		js: `${srcFolder}/js/app.js`,
		images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp}`,
		svg: `${srcFolder}/img/**/*.svg`,
		scss: `${srcFolder}/scss/style.scss`,
		html: `${srcFolder}/*.html`,
		files: `${srcFolder}/files/**/*.*`,
		svgicons: `${srcFolder}/svgicons/*.svg`,
	},
	//Пути к файлам, за которыми GULP постоянно следит и выполняет определенные действия при изменениях
	watch: {
		js: `${srcFolder}/js/**/*.js`,
		scss: `${srcFolder}/scss/**/*.scss`,
		html: `${srcFolder}/**/*.html`,
		images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp}`,
		files: `${srcFolder}/files/**/*.*`
	},
	// Обект отвечает за удаление папки, каждый раз когда запускаем GULP
	clean: buildFolder,
	buildFolder: buildFolder,
	srcFolder: srcFolder,
	rootFolder: rootFolder,
	//Указываем папку на удаленном FTP-server
	ftp:``
}