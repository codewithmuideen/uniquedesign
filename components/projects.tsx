import ProjectPreview from "./ui/project-preview";

const Projects = () => {
  return (
    <section
      id="projects"
      className="grid grid-cols-1 lg:grid-cols-2 my-4 gap-4"
    >
      
      <ProjectPreview
        name="Flip App"
        description="Next-gen social media"
        imageUrl="/assets/project-1.png"
        bgColor="#685cdd"
        dark
      />
      <ProjectPreview
        name="Moneyscape"
        description="Lend and borrow dashboard"
        imageUrl="/assets/project-2.png"
        bgColor="#313442"
        dark
      />
      <ProjectPreview
        name="Mobile App"
        description="Endless Gifting Possibilities"
        imageUrl="/assets/productD0.png"
        bgColor="#685cdd"
        dark
      />
      <ProjectPreview
        name=""
        description=""
        imageUrl="/assets/productD6.jpg"
        bgColor="transparent"
        dark
      />
      <ProjectPreview
        name="Admin Onboarding"
        description="Increase user engagement"
        imageUrl="/assets/project-3.png"
      />
      <ProjectPreview
        name="Craftwork"
        description="Design resources that will boost your creative workflow"
        imageUrl="/assets/project-6.png"
      />
<ProjectPreview
        name=""
        description=""
        imageUrl="/assets/productD5.jpg"
        bgColor="transparent"
        dark
      />
      <ProjectPreview
        name=""
        description=""
        imageUrl="/assets/productD4.jpg"
        bgColor="transparent"
        dark
      />
      <ProjectPreview
        name="Newsy App"
        description="News aggregator app"
        imageUrl="/assets/project-4.png"
        bgColor="#171717"
        dark
      />
      <ProjectPreview
        name="Krypto"
        description="Analyze crypto currency"
        imageUrl="/assets/project-5.png"
      />
    </section>
  );
};

export default Projects;
