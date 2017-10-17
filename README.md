#On this git repository I will check the setbacks and common issues on implementing Angular

While working in a MEAN project I found many differences on how Angular 2 was implemented and the current standards. Then I decided to compleate the stadard *"Quick start"* provided in [Angular Website](https://angular.io/guide/quickstart).

Then I decided to create different branches were I will be exploring the paths they have defined

1. First steps
2. Tour of Heroes
2. Issues
3. Quick ideas implementation

1. Learned
	* on save the project uses webpack to compile and refresh the app on browser
	* where the app lives? in SRC folder
		/app
		* Has css, html and TypeScript files
		For Sublime it's recommended this [package](https://packagecontrol.io/packages/TypeScript).
		you dont know how to install that package? --> check [Package control](https://packagecontrol.io/docs/usage)
	* AppComponent: main/root component in app.component[files]
	* AppModule: root module to declare components in app.module.ts


Actually you can read more from the quickstart...

	* assets/ folder: really don't need too much explanation --> is a folder where you will put all your assets such as images
	* environments/ folder: where you will set the destination environments (develpment production mock services...) 