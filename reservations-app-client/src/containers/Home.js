import React, { Component } from "react";
import "./Home.css";

export default class Home extends Component {
  render() {
    return (
      <div className="Home">
        <section id="main">
            <div class="frame">
  							<div class="text">
  								<img id="yellow-logo" src="img/yellow-logo.svg" alt="Logo amarelo dos Minions"/>
  								<p>Se apaixone por toda essa<br/>fofura.<br/>Conheça a loja oficial dos<br/>Minions.</p>
  							</div>
  							<img id="minion-1" src="img/minions-1.png" alt="Minions"/>
  							<img id="double-arrow-down" src="img/arrow-of-double-angle-pointing-down.svg" alt="Seta dupla para baixo"/>
            </div>
        </section>

  			<section id="minions" class="clear">
  				<h2>conheça nossos minions!</h2>
  				<div class="half-screen active" id="half-screen-left">
  				</div>
  				<div class="half-screen" id="half-screen-right">
  				</div>
  				<div id="minions-info">
  						<div class="minion-show active" id="first-minion">
  							<img src="/img/first-minion.png" alt="Minion #1"/>
  							<div class="text">
  								<h3>Minion #1</h3>
  								<p>Minions ipsum tulaliloo belloo! Poulet tikka masala belloo! Jeje la bodaaa bee do bee do bee do ti aamoo! Uuuhhh. Belloo! tank yuuu! Bananaaaa tank yuuu! Pepete chasy bappleees pepete la bodaaa bananaaaa chasy</p>
  							</div>
  						</div>
  						<div class="minion-show" id="second-minion">
  							<img src="img/second-minion.png" alt="Minion #2"/>
  							<div class="text">
  								<h3>Minion #2</h3>
  								<p>Minions ipsum tulaliloo belloo! Poulet tikka masala belloo! Jeje la bodaaa bee do bee do bee do ti aamoo! Uuuhhh. Belloo! tank yuuu! Bananaaaa tank yuuu! Pepete chasy bappleees pepete la bodaaa bananaaaa chasy</p>
  							</div>
  						</div>
  				</div>
  			</section>

  			<section id="contact">
  					<h2>gostou? reserve seu minion agora!</h2>
  					<div class="frame">
  						<img src="img/minion-2.png" alt="Minion correndo"/>
  						<form id="contact-form">
  							<div class="item">
  								<label>Nome:</label><br/>
  								<input type="text"/><br/>
  							</div>
  							<div class="item radio">
  								<label>Escolha seu Minion:</label><br/>
  								<input type="radio" name="minion" value="#1" id="minion-1-radio"/>
  								<input type="radio" name="minion" value="#2" id="minion-2-radio"/>
  								<label for="minion-1-radio" class="minion-radio">Minion #1</label>
  								<label for="minion-2-radio" class="minion-radio">Minion #2</label>
  							</div>
  							<div class="item">
  								<label>E-mail:</label><br/>
  								<input type="email"/><br/>
  							</div>
  							<div class="item">
  								<label>Telefone:</label><br/>
  								<input type="tel"/>
  							</div>
  							<button type="button">Enviar</button>
  						</form>
  					</div>
  			</section>

      </div>
    );
  }
}