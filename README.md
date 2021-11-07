<!-- SHIELDS -->

<div align="center">

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
</div>

<!-- PROJECT INTRO -->

<div align="center">
    <h3 align="center">Solder</h3>
    <p align="center">
        Solder is an ambitious piece of software that'll take you on an unforgettable journey 
        <br />
        <br />
        <a href="https://github.com/ahmims/solder/issues">Report Bug</a>
        ·
        <a href="https://github.com/ahmims/solder/issues">Request Feature</a>
    </p>
</div>

<!-- ABOUT THE PROJECT -->
## About The Project
The project doesn't have a clear roadmap onto what it could possibly grow up to be as of yet, we have
ideas and speculations but nothing guaranteed.

For the time being, it provides a web scraper that takes a .json file containing _module data, scraping interval, & product pages_
as input and spews out the requested information on a defined time interval _(hopefully)_.

Current plans for the project:
* A seamless experience by providing some kind of interface that enables the normal user to interact with this
* Have notifications support to warn the user when a said action is triggered.

The bigger goal:
* A 90s metaverse.


<!-- BUILT WITH -->
### Built With

* [Node.js](https://nodejs.org/)

<!-- GETTING STARTED -->
## Getting Started

In this section we'll walk you through how to get the project up and ready locally, so that you can start fiddling 
with this sandbox of a code

### Prerequisites

Make sure you have docker installed and running.

Pull this repo locally via
  ```sh
  git clone https://github.com/AHmims/Solder.git
  ```

### Installation

1. Build them containers
   ```sh
   make druid
   ```
2. After the build has finished, which will take some time, start the containers
   ```sh
   make up
   ```
   
By default, the webserver should be up on port 42069.
That's all


<!-- USAGE EXAMPLES -->
## Usage

**_TO-DO_**


<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.MD` for more information.


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/ahmims/solder.svg?style=flat
[contributors-url]: https://github.com/ahmims/solder/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/ahmims/solder.svg?style=flat
[forks-url]: https://github.com/ahmims/solder/network/members
[stars-shield]: https://img.shields.io/github/stars/ahmims/solder.svg?style=flat
[stars-url]: https://github.com/ahmims/solder/stargazers
[issues-shield]: https://img.shields.io/github/issues/ahmims/solder.svg?style=flat
[issues-url]: https://github.com/ahmims/solder/issues
[license-shield]: https://img.shields.io/github/license/ahmims/solder?style=flat
[license-url]: https://github.com/ahmims/solder/blob/master/LICENSE.md
