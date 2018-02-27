import * as React from "react";
import { Container, Header, Title, Content, Text, Button, Icon, Left, Right, Body, Card, List } from "native-base";

import NotificationItem from "../../components/NotificationItem.js"; 

import styles from "./styles";
export interface Props {
    navigation: any;
    list: any;
}
export interface State {}
const itemList = [
  {
      route: "NotificationItem",
      caption: "Dope ass jacket",
      toWho: "Nash",
      date : "2019-03-06",
      image: "",
      sender: "",
      status: "",
      dateAccepted: "",
  },
   {
      route: "NotificationItem",
      caption: "Item 2",
      toWho: "me",
      date : "2019-03-06",
      image: "",
      sender: "",
      status: "action required",
      dateAccepted: "",
  }
];

class NotificationsScreen extends React.Component<Props, State> {
	render() {
		return (
			<Container style={styles.container}>
				<Header>
					<Left>
						<Button transparent onPress={() => this.props.navigation.goBack()}>
			              <Icon
			                active
			                name="menu"		                
			              />
			            </Button>
					</Left>
					<Body style={{ flex: 3 }}>
						<Title>Notifications</Title>
					</Body>

					<Right />
				</Header>

				<Content>
			<Card>
			<List
		    dataArray={itemList}
		    renderRow={data => {
			return (
				<NotificationItem navigation={this.props.navigation} data={data} />
			);
		    }}
			/>      
			</Card>  
			</Content>
			</Container>
		);
	}
}

export default NotificationsScreen;