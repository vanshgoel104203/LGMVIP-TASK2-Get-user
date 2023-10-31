

const Getuser = (props) => {
  return (
    <div className="getuser">
        <img src={props.avatar} alt="" />
        <p>Id: {props.id}</p>
        <p>Login: {props.login}</p>
        <p>Node id: {props.node_id}</p>
        <p>Starred_url: {props.starred_url}</p>
        
    <p>subscriptions_url: {props.subscriptions_url}</p>
        <p>organizations_url: {props.organizations_url}</p>
        <p>repos_url: {props.repos_url}</p>
        <p>events_url: {props.events_url}</p>
        <p>received_events_url: {props.received_events_url}</p>
        <p>type: {props.type}</p>
        <p>site_admin: {props.site_admin}</p>

    </div>
  )
}

export default Getuser;