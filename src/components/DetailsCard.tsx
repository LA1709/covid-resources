import { Button, Card, Collapse, Divider, Typography } from "antd";
import {
	BankOutlined,
	CheckCircleOutlined,
	EnvironmentOutlined,
	FieldTimeOutlined,
	InfoCircleOutlined,
	MailOutlined,
	PhoneOutlined,
	UserOutlined,
} from "@ant-design/icons";
import { CSSProperties, FC, Fragment, useState } from "react";

interface DetailsCardProps {
	name: String;
	isOrganisation?: Boolean;
	category: String;
	location: String;
	phoneNumbers: String[];
	emailAddresses?: String[];
	verifiedAt?: Date;
	verifiedCount?: Number;
	contactLink: String;
	details: String;
}

interface DetailsCardStyles {
	cardIcon: CSSProperties;
	divider: CSSProperties;
	root: CSSProperties;
	addPadding: CSSProperties;
	title: CSSProperties;
	headIcon: CSSProperties;
	cardText: CSSProperties;
}

const style: DetailsCardStyles = {
	cardIcon: {
		marginRight: 8,
		fontSize: 18,
	},
	divider: {
		marginTop: 12,
		marginBottom: 6,
	},
	root: {
		padding: 0,
	},
	addPadding: {
		padding: 8,
	},
	title: {
		marginBottom: 0,
		marginTop: 8,
	},
	headIcon: {
		padding: 0,
		fontSize: 24,
		marginTop: 8,
	},
	cardText: {
		fontSize: 20,
	},
};

const { Text, Link, Title } = Typography;
const DetailsCard: FC<DetailsCardProps> = ({
	name,
	isOrganisation,
	category,
	location,
	phoneNumbers,
	emailAddresses,
	verifiedAt,
	verifiedCount,
	contactLink,
	details,
}) => {
	const [panelHeader, setPanelHeader] = useState<String>("More Details");
	return (
		<Card bodyStyle={style.root}>
			<Card.Meta
				avatar={
					isOrganisation == null ? null : isOrganisation === true ? (
						<BankOutlined style={style.headIcon} />
					) : (
						<UserOutlined style={style.headIcon} />
					)
				}
				title={
					<Title level={4} style={style.title}>
						{name}
					</Title>
				}
				style={style.addPadding}
			/>
			<Divider style={style.divider} />
			<div style={style.addPadding}>
				<div>
					<InfoCircleOutlined style={style.cardIcon} />
					<Text style={style.cardText}>
						{category.replace(/(^\w{1})|(\s+\w{1})/g, (letter) =>
							letter.toUpperCase()
						)}
					</Text>
				</div>
				<div>
					<EnvironmentOutlined style={style.cardIcon} />
					<Text type="secondary" style={style.cardText}>
						{location}
					</Text>
				</div>
				<div>
					<FieldTimeOutlined style={style.cardIcon} />
					<Text type="secondary" style={style.cardText}>
						{verifiedAt}
					</Text>
				</div>
				{verifiedCount == null ? null : (
					<div>
						<CheckCircleOutlined style={style.cardIcon} />
						<Text style={style.cardText}>
							{verifiedCount} people found this useful
						</Text>
					</div>
				)}
				<div>
					<PhoneOutlined style={style.cardIcon} />
					{phoneNumbers != null && phoneNumbers.length !== 0
						? phoneNumbers.map((phoneNumber, index) => (
								<Fragment>
									<Link
										href={`tel:+91${phoneNumber}`}
										style={style.cardText}
									>
										{phoneNumber}
									</Link>
									{index !== phoneNumbers.length - 1
										? ", "
										: null}
								</Fragment>
						  ))
						: "N.A"}
				</div>
				{emailAddresses != null && emailAddresses.length !== 0 ? (
					<div>
						<MailOutlined style={style.cardIcon} />
						{emailAddresses.map((emailAddress, index) => (
							<Fragment>
								<Link
									href={`mailto:${emailAddress}`}
									style={style.cardText}
								>
									{emailAddress}
								</Link>
								{index !== emailAddresses.length - 1
									? ", "
									: null}
							</Fragment>
						))}
					</div>
				) : null}
			</div>
			<Collapse
				onChange={(activePanels) => {
					setPanelHeader(
						activePanels.length === 1
							? "Less Details"
							: "More Details"
					);
				}}
			>
				<Collapse.Panel
					key={1}
					header={panelHeader}
					collapsible={details == null ? "disabled" : undefined}
				>
					{details}
				</Collapse.Panel>
			</Collapse>
			<Link href={`${contactLink}`}>
				<Button type="primary" block>
					Contact Now
				</Button>
			</Link>
		</Card>
	);
};

export default DetailsCard;
