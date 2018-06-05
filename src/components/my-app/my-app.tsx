import { Component } from "@stencil/core";


@Component({
	tag: "my-app",
	styleUrl: "my-app.scss"
})
export class App {

	componentDidLoad() {
        console.log("Hello World");
	}


	render() {
		return (
            <main>
                Hello World
            </main>
        );
	}
}
