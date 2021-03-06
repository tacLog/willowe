import * as React from "react";
import { Text, Container, List, ListItem, Content } from "native-base";
import { NavigationActions } from "react-navigation";
import { AppRegistry, Image, StatusBar } from "react-native"

const routes = [
	{
		route: "Home",
		caption: "Home",
	},
	{
		route: "Notifications",
		caption: "Notifications",
	},
	{
		route: "Legal",
		caption: "Legal",
	},
	{
		route: "Settings",
		caption: "Profile",
	},
	{
		route: "Login",
		caption: "Logout",
	},
];

export interface Props {
	navigation: any,
}
export interface State {}
const resetAction = NavigationActions.reset({
	index: 0,
	actions: [NavigationActions.navigate({ routeName: "Login" })],
});
export default class Sidebar extends React.Component<Props, State> {
	render() {
		return (
			<Container>
				<Content>
					<Image square style={{
			              height: 100,
			              width: 90,
			              position: "absolute",
			              alignSelf: "center",
			              top: 25
			            }}
			            source={{
			              uri:"http://fitnessanddiabetes.com/wp-content/uploads/2018/03/willowe_icon_new.png"
			            }}
   		            />
					<List
						style={{ marginTop: 120 }}
						dataArray={routes}
						renderRow={data => {
							return (
								<ListItem
									button
									onPress={() => {
										data.route === "Login"
											? this.props.navigation.dispatch(resetAction)
											: this.props.navigation.navigate(data.route);
									}}
								>
									<Text>{data.caption}</Text>
								</ListItem>
							);
						}}
					/>
				</Content>
			</Container>
		);
	}
}
