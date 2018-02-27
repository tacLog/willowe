import * as React from "react";
import { Image, Platform } from "react-native";
import { Container, Content, Header, Body, Title, Button, Text, View, Icon, Footer } from "native-base";
//import styles from "./styles";
export interface Props {
	loginForm: any,
	onLogin: Function,
}
export interface State {}
class Login extends React.Component<Props, State> {
	render() {
		return (
			<Container>
				<Header style={{ height: 300 }}>
					<Body style={{ alignItems: "center" }}>
			              <Image square style={{
						                        height: 200,
						                        width: 190,
						                        alignSelf: "center",
						                        top: 5
						                      }}
						                source={{
						                     uri:"https://cdn0.iconfinder.com/data/icons/trees-5/100/07-256.png"
						                       }}/>
									
						<Title>Willowe</Title>
					</Body>
				</Header>
				<Content>
					{this.props.loginForm}
					<View padder>
						<Button block onPress={() => this.props.onLogin()}>
							<Text>Login</Text>
						</Button>
					</View>
				</Content>

			</Container>
		);
	}
}

export default Login;
