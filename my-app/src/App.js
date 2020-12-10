import React, {useState} from "react";

import { NavLink, Route, BrowserRouter, Switch, useParams } from "react-router-dom";


const Home = () => (
  <div id="main">
					<section className="wrapper style1">
						<div className="inner">
							
								<div className="flex flex-2">
									<div className="col col1">
										<div className="image round fit">
											<a href="generic.html" className="link"><img src="images/pic01.jpg" alt="" /></a>
										</div>
									</div>
									<div className="col col2">
										<h3>Maecenas a gravida quam</h3>
										<p>Etiam posuere hendrerit arcu, ac blandit nulla. Sed congue malesuada nibh, a varius odio vehicula aliquet. Aliquam consequat, nunc quis sollicitudin aliquet, enim magna cursus auctor lacinia nunc ex blandit augue. Ut vitae neque fermentum, luctus elit fermentum, porta augue. Nullam ultricies, turpis at fermentum iaculis, nunc justo dictum dui, non aliquet erat nibh non ex.</p>
										<p>Sed congue malesuada nibh, a varius odio vehicula aliquet. Aliquam consequat, nunc quis sollicitudin aliquet, enim magna cursus auctor lacinia nunc ex blandit augue. Ut vitae neque fermentum, luctus elit fermentum, porta augue. Nullam ultricies, turpis at fermentum iaculis, nunc justo dictum dui, non aliquet erat nibh non ex. </p>
										<a href="#" className="button">Learn More</a>
									</div>
								</div>
						</div>
					</section>

				
					<section className="wrapper style2">
						<div className="inner">
							<div className="flex flex-2">
								<div className="col col2">
									<h3>Suspendisse quis massa vel justo</h3>
									<p>Etiam posuere hendrerit arcu, ac blandit nulla. Sed congue malesuada nibh, a varius odio vehicula aliquet. Aliquam consequat, nunc quis sollicitudin aliquet, enim magna cursus auctor lacinia nunc ex blandit augue. Ut vitae neque fermentum, luctus elit fermentum, porta augue. Nullam ultricies, turpis at fermentum iaculis, nunc justo dictum dui, non aliquet erat nibh non ex.</p>
									<p>Sed congue malesuada nibh, a varius odio vehicula aliquet. Aliquam consequat, nunc quis sollicitudin aliquet, enim magna cursus auctor lacinia nunc ex blandit augue. Ut vitae neque fermentum, luctus elit fermentum, porta augue. Nullam ultricies, turpis at fermentum iaculis, nunc justo dictum dui, non aliquet erat nibh non ex. </p>
									<a href="#" className="button">Learn More</a>
								</div>
								<div className="col col1 first">
									<div className="image round fit">
										<a href="generic.html" className="link"><img src="images/pic02.jpg" alt="" /></a>
									</div>
								</div>
							</div>
						</div>
					</section>

				
					<section className="wrapper style1">
						<div className="inner">
							<header className="align-center">
								<h2>Aliquam ipsum purus dolor</h2>
								<p>Cras sagittis turpis sit amet est tempus, sit amet consectetur purus tincidunt.</p>
							</header>
							<div className="flex flex-3">
								<div className="col align-center">
									<div className="image round fit">
										<img src="images/pic03.jpg" alt="" />
									</div>
									<p>Sed congue elit malesuada nibh, a varius odio vehicula aliquet. Aliquam consequat, nunc quis sollicitudin aliquet. </p>
									<a href="#" className="button">Learn More</a>
								</div>
								<div className="col align-center">
									<div className="image round fit">
										<img src="images/pic05.jpg" alt="" />
									</div>
									<p>Sed congue elit malesuada nibh, a varius odio vehicula aliquet. Aliquam consequat, nunc quis sollicitudin aliquet. </p>
									<a href="#" className="button">Learn More</a>
								</div>
								<div className="col align-center">
									<div className="image round fit">
										<img src="images/pic04.jpg" alt="" />
									</div>
									<p>Sed congue elit malesuada nibh, a varius odio vehicula aliquet. Aliquam consequat, nunc quis sollicitudin aliquet. </p>
									<a href="#" className="button">Learn More</a>
								</div>
							</div>
						</div>
					</section>

			</div>
);

const Generic = () => (
  <div id="main">
					<section className="wrapper">
						<div className="inner">
							<header className="align-center">
								<h1>Generic</h1>
								<p>Cras sagittis turpis sit amet est tempus, sit amet consectetur purus tincidunt.</p>
							</header>
							<div className="flex flex-2">
								<div className="col col2">
									<h3>Suspendisse quis massa vel justo</h3>
									<p>Etiam posuere hendrerit arcu, ac blandit nulla. Sed congue malesuada nibh, a varius odio vehicula aliquet. Aliquam consequat, nunc quis sollicitudin aliquet, enim magna cursus auctor lacinia nunc ex blandit augue. Ut vitae neque fermentum, luctus elit fermentum, porta augue. Nullam ultricies, turpis at fermentum iaculis, nunc justo dictum dui, non aliquet erat nibh non ex.</p>
									<p>Sed congue malesuada nibh, a varius odio vehicula aliquet. Aliquam consequat, nunc quis sollicitudin aliquet, enim magna cursus auctor lacinia nunc ex blandit augue. Ut vitae neque fermentum, luctus elit fermentum, porta augue. Nullam ultricies, turpis at fermentum iaculis, nunc justo dictum dui, non aliquet erat nibh non ex. Sed sollicitudin bibendum ultricies. Vivamus tristique justo lacinia dui tempus consequat. Integer tristique eu nisi nec fermentum. Ut malesuada quis massa at ultricies. Donec gravida ipsum in augue volutpat laoreet. Ut lobortis turpis sit amet sodales ultrices.</p>
								</div>
								<div className="col col1 first">
									<div className="image round fit">
										<a href="generic.html" className="link"><img src="images/pic02.jpg" alt="" /></a>
									</div>
								</div>
							</div>
							<p>Curabitur venenatis lorem ut finibus finibus. Ut quis eleifend libero, nec ultricies metus. Morbi magna risus, congue sit amet pellentesque eget, malesuada ut justo. Sed ac pretium quam. Ut vel ex vitae enim sagittis posuere ac id erat. Vestibulum vel ullamcorper tellus. Donec sapien massa, venenatis ac felis vel, vestibulum sagittis enim. Maecenas ut egestas lorem, nec luctus ligula. Vestibulum neque diam, aliquet non enim a, cursus lacinia metus. Aenean fringilla luctus rhoncus. Integer vulputate massa ac suscipit venenatis. Integer luctus elit non nulla fringilla, ullamcorper maximus sem congue. Integer tristique eu nisi nec fermentum. Ut malesuada quis massa at ultricies.</p>
							<p>Donec molestie tellus eu tincidunt dignissim. Sed sollicitudin bibendum ultricies. Vivamus tristique justo lacinia dui tempus consequat. Sed hendrerit justo in nisl auctor, id rutrum tortor congue. Vivamus mattis nibh et sem rutrum, vel viverra purus viverra. Donec et justo at orci euismod hendrerit vel vel neque. Donec gravida ipsum in augue volutpat laoreet. Ut lobortis turpis sit amet sodales ultrices.</p>
						</div>
					</section>
				
					<section className="wrapper style1">
						<div className="inner">
							<header className="align-center">
								<h2>Aliquam ipsum purus dolor</h2>
								<p>Cras sagittis turpis sit amet est tempus, sit amet consectetur purus tincidunt.</p>
							</header>
							<div className="flex flex-3">
								<div className="col align-center">
									<div className="image round fit">
										<img src="pic03.jpg" alt="" />
									</div>
									<p>Sed congue elit malesuada nibh, a varius odio vehicula aliquet. Aliquam consequat, nunc quis sollicitudin aliquet. </p>
									<a href="#" className="button">Learn More</a>
								</div>
								<div className="col align-center">
									<div className="image round fit">
										<img src="pic05.jpg" alt="" />
									</div>
									<p>Sed congue elit malesuada nibh, a varius odio vehicula aliquet. Aliquam consequat, nunc quis sollicitudin aliquet. </p>
									<a href="#" className="button">Learn More</a>
								</div>
								<div className="col align-center">
									<div className="image round fit">
										<img src="images/pic04.jpg" alt="" />
									</div>
									<p>Sed congue elit malesuada nibh, a varius odio vehicula aliquet. Aliquam consequat, nunc quis sollicitudin aliquet. </p>
									<a href="#" className="button">Learn More</a>
								</div>
							</div>
						</div>
					</section>

			</div>
);

const Profile = () => {
  const { name } = useParams();
  return (
    <div>
      <h1 className="title is-1">This is the Profile Page</h1>
      <article className="message is-dark" style={{ marginTop: 40 }}>
        <div className="message-header">
          <p>{name}</p>
        </div>
        <div className="message-body">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
          <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta
          nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida
          purus diam, et dictum <a>felis venenatis</a> efficitur. Aenean ac{" "}
          <em>eleifend lacus</em>, in mollis lectus. Donec sodales, arcu et
          sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi
          magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales
          sem.
        </div>
      </article>
    </div>
  );
};

const Loging = () => 
{

  return(<div>hi..</div>);

}

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <nav
      className="navbar is-primary"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="container">
        <div className={`navbar-menu is-active`}>
          <div className="navbar-start">
            <NavLink className="navbar-item" activeClassName="is-active" to="/home">Home</NavLink>
            <NavLink className="navbar-item" activeClassName="is-active" to="/generic" > Generic </NavLink>
            <NavLink className="navbar-item" activeClassName="is-active" to="/profile" > Profile </NavLink>
            <NavLink className="navbar-item" activeClassName="is-active" to="/login" > Log in </NavLink>

            <div className="navbar-end">

            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default function App() {
  return (
    <BrowserRouter>
      <div>
      <header id="header">
      <div className="logo">
        <NavLink className="navbar-item" activeClassName="is-active" to="/home">Urban <span>by TEMPLATED</span></NavLink>
      </div>
      <Navbar />
      <a href="#menu">Menu</a>
    </header>

        
        <section id="banner">
          <div className="inner">
            <header>
              <h1>This is Urban</h1>
              <p>Aliquam libero augue varius non odio nec faucibus congue<br />felis quisque a diam rutrum tempus massa accumsan faucibus purus.</p>
            </header>
            <a href="#main" className="button big scrolly">Learn More</a>

          </div>
        </section>
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/generic" component={Generic} />
          <Route path="/profile" component={Profile} />
        </Switch>

      </div>
    </BrowserRouter>
  );
}
