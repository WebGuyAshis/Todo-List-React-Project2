import "./About.styles.css";
const About = () => {
  return (
    <div className="about-container">
      <h1 className="about-heading">
        Achieve Your Goals with Ease: Introducing the React ToDo App
      </h1>
      <p className="about-description">
        In a world filled with endless tasks, deadlines, and responsibilities,
        staying organized and on top of your to-do list can be quite the
        challenge. That's where the React ToDo App comes to the rescue. With its
        user-friendly interface, soothing color scheme, and a host of features,
        it's the perfect tool to help you manage your tasks and boost your
        productivity.
      </p>

      <h2 className="sub-heading">A Refreshing User Experience</h2>
      <p className="about-description">
        One of the first things you'll notice about the React ToDo App is its
        soothing and visually appealing user interface. The calming colors and
        clean design create an environment that encourages focus and
        productivity.
      </p>

      <h2 className="sub-heading">Features That Make a Difference</h2>
      <p className="about-description">
        The app comes packed with features designed to simplify your task
        management:
      </p>

      <h3 className="feature-heading">1. Task Creation</h3>
      <p className="about-description">
        Easily create new tasks by providing essential details like titles,
        descriptions, due dates, and categories. Whether it's a work-related
        project or a personal goal, you can organize it all in one place.
      </p>

      <h3 className="feature-heading">2. Task Deletion</h3>
      <p className="about-description">
        Completed a task or decided it's no longer relevant? No problem.
        Deleting tasks is a breeze with just a click, allowing you to declutter
        your list effortlessly.
      </p>

      <h3 className="feature-heading">3. Task Editing</h3>
      <p className="about-description">
        Plans change, and so do tasks. The app lets you edit task details,
        ensuring that your list stays up-to-date and reflects your current
        priorities.
      </p>

      <h3 className="feature-heading">4. Task Alerts</h3>
      <p className="about-description">
        Never miss a deadline again. Set alerts for your tasks, and the app will
        remind you at just the right time. Say goodbye to that feeling of "I
        forgot something important!"
      </p>

      <h3 className="feature-heading">5. User Account[Feature Comming Soon]</h3>
      <p className="about-description">
        Create and manage your user account to personalize your experience. Your
        tasks, your way.
      </p>

      <h3 className="feature-heading">6. Search Tasks</h3>
      <p className="about-description">
        Search tasks with any keyword you dont need to type the whole word, just
        type 3-4 words and you will get the results.
      </p>

      <h3 className="feature-heading">7. Organised</h3>
      <p className="about-description">
        You can filter tasks as per your convienience
      </p>

      <h3 className="feature-heading">8. Dashboard and Pie Chart</h3>
      <p className="about-description">
        The dashboard provides a quick snapshot of your tasks completion status.
        Need a more visual representation? The pie chart gives you an
        at-a-glance view of your tasks by category.
      </p>

      <div className="note">
        {" "}
        <b>
          The React ToDo App is your partner in achieving your goals, whether
          big or small. Say goodbye to missed deadlines and disorganized lists.
          With its user-friendly interface and powerful features, you'll be on
          your way to a more productive and organized life in no time. So, why
          wait? Start using the React ToDo App today and take that first step
          towards a more organized and productive you!
        </b>
      </div>
    </div>
  );
};

export default About;
