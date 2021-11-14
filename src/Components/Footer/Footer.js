function Footer(props) {
  return (
    <footer className="bg-black text-center py-5">
      <div className="container px-5">
        <div className="text-white-50 small">
          <div className="mb-2">
            &copy; Alexis Moulin 2021. All Rights Reserved.
          </div>
          <a href={props.data.privacyPolicyURL}>Privacy</a>
          <span className="mx-1">&middot;</span>
          <a href={props.data.githubURL}>Terms</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
