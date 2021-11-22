# Contribute your resources

If you are leading one of the hackathon tracks, know of some missing resources, or simply find an error in the listed resources, you can make changes to the repository as follows:

## 1. Fork the repository

[Fork the repository](https://docs.github.com/en/get-started/quickstart/fork-a-repo#fork-an-example-repository) to be able to make your changes, while not affecting the code-base until you are ready to merge. For simple resource changes it is best to refer to the `main` branch, as it represents the current stable & launched version.

## 2. Make your changes

You can easily add, remove or adjust resources by editing the `content/resources.json` file. The file has the following structure:
```json
{
  "resources": [],
  "categories": {
    "title": "My hackathon track",
    "resources": []
  }
}
```

The most changes you want to make probably need to be made in the respective hackathon-track category. Here you find a `title` which is displayed in the tab-list, and the `resources` holding an array where the links to all relevant track resources are located.

A single resource has the following structure, where all attributes are required:
```json
{
  "title": "My resource title",
  "desc": "A short description",
  "url": "https://my-resource-location.eu"
}
```

You can now go ahead and make changes to this file, using one of the following option.

### Using the UI
Navigate to the `contnet` directory and click on the `resources.json` file. Here you can click on the pencil icon to edit the file. 

![grafik](https://user-images.githubusercontent.com/28757404/142865728-4d26e83a-8e60-4c33-809b-02198fa0506f.png)

You can now make your changes right inside the browser. Once you are done commit your changes by using the dedicated section below the displayed file content.

![grafik](https://user-images.githubusercontent.com/28757404/142865981-a8be3047-26ce-45dc-82b6-1318887dadde.png)


### Make changes locally
Once you have forked the repository, go ahead and clone it locally. 
You need to install or update [node.js](https://nodejs.org/en/)
Navigate into the cloned directory and run the following command inside the terminal to install the project dependencies.
```bash
npm install
```

First of all, checkout to a new branch to make your changes in. Now you can edit the `/content/resources.json` file. If you want to preview your changes locally you can simply run the following command:
```bash
npm start
```

Once you have all your changes made don't forget to commit them to the new branch and push it to github. Back in the github web-interface you can now create a Pull Request to merge your changes to the main branch of this repository.
