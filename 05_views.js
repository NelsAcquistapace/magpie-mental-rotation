// In this file you can instantiate your views
// We here first instantiate wrapping views, then the trial views


/** Wrapping views below

* Obligatory properties

    * trials: int - the number of trials this view will appear
    * name: string

*Optional properties
    * buttonText: string - the text on the button (default: 'next')
    * text: string - the text to be displayed in this view
    * title: string - the title of this view

    * More about the properties and functions of the wrapping views - https://magpie-ea.github.io/magpie-docs/01_designing_experiments/01_template_views/#wrapping-views

*/

// Every experiment should start with an intro view. Here you can welcome your participants and tell them what the experiment is about
const intro = magpieViews.view_generator("intro", {
  trials: 1,
  name: 'intro',
  // If you use JavaScripts Template String `I am a Template String`, you can use HTML <></> and javascript ${} inside
  text: `This is a <strong>cool</strong> scientific experiment.
            <br />
            <br />
            Do not wait any longer and start!
            <br />
            `,
  buttonText: 'go to instructions'
});

// For most tasks, you need instructions views
const instructions = magpieViews.view_generator("instructions", {
  trials: 1,
  name: 'instructions1',
  title: 'General Instructions',
  text: `You will be shown pictures in which are two objects.
                  <br />
                  Your task is to dertermine if these two objects are the same or if they are different.
                  <br />
                  If they are the same hit the <strong>f</strong> button on your keyborad.
                  <br />
                  If they are different hit the <strong>j</strong> button on your keyboard.
                  <br />
                  Please be as fast and accurate as possible.
                  <br />
                  <br />
                  You will start with some practice trials.
                  `,

  buttonText: 'next'
});

const begin_screen = magpieViews.view_generator("begin", {
  trials: 1,
  name: "begin_screen",
  title: "Now the experiment will start",
  text: `Remeber:
                  <br />
                  If the objects are the same hit the <strong>f</strong> button on your keyborad.
                  <br />
                  If the objects are different hit the <strong>j</strong> button on your keyboard.
                  <br />
                  Please be as fast and as accurate as possible.`,
  buttonText: "begin the experiment"
})

// In the post test questionnaire you can ask your participants addtional questions
const post_test = magpieViews.view_generator("post_test", {
  trials: 1,
  name: 'post_test',
  title: 'Additional information',
  text: 'Answering the following questions is optional, but your answers will help us analyze our results.'

  // You can change much of what appears here, e.g., to present it in a different language, as follows:
  // buttonText: 'Weiter',
  // age_question: 'Alter',
  // gender_question: 'Geschlecht',
  // gender_male: 'männlich',
  // gender_female: 'weiblich',
  // gender_other: 'divers',
  // edu_question: 'Höchster Bildungsabschluss',
  // edu_graduated_high_school: 'Abitur',
  // edu_graduated_college: 'Hochschulabschluss',
  // edu_higher_degree: 'Universitärer Abschluss',
  // languages_question: 'Muttersprache',
  // languages_more: '(in der Regel die Sprache, die Sie als Kind zu Hause gesprochen haben)',
  // comments_question: 'Weitere Kommentare'
});

// The 'thanks' view is crucial; never delete it; it submits the results!
const thanks = magpieViews.view_generator("thanks", {
  trials: 1,
  name: 'thanks',
  title: 'Thank you for taking part in this experiment!',
  prolificConfirmText: 'Press the button'
});

/** trial (magpie's Trial Type Views) below

* Obligatory properties

    - trials: int - the number of trials this view will appear
    - name: string - the name of the view type as it shall be known to _magpie (e.g. for use with a progress bar)
            and the name of the trial as you want it to appear in the submitted data
    - data: array - an array of trial objects

* Optional properties

    - pause: number (in ms) - blank screen before the fixation point or stimulus show
    - fix_duration: number (in ms) - blank screen with fixation point in the middle
    - stim_duration: number (in ms) - for how long to have the stimulus on the screen
      More about trial life cycle - https://magpie-ea.github.io/magpie-docs/01_designing_experiments/04_lifecycles_hooks/

    - hook: object - option to hook and add custom functions to the view
      More about hooks - https://magpie-ea.github.io/magpie-docs/01_designing_experiments/04_lifecycles_hooks/

* All about the properties of trial views
* https://magpie-ea.github.io/magpie-docs/01_designing_experiments/01_template_views/#trial-views
*/


const practice_experiment = magpieViews.view_generator("key_press", {
  trials: 12,
  name: "practice_experiment",
  pause: 250,
  data: _.shuffle(main_experiment_trials.key_press),
});

const main_experiment = magpieViews.view_generator("key_press", {
  trials: 48,
  name: "main_experiment",
  pause: 250,
  data: _.shuffle(main_experiment_trials.key_press),
});

// There are many more templates available:
// forced_choice, slider_rating, dropdown_choice, testbox_input, rating_scale, image_selection, sentence_choice,
// key_press, self_paced_reading and self_paced_reading_rating_scale
