- https://github.com/antonpichka/library_architecture_mvvm_modify/labels

---

- After setup. Everything after this message can be deleted. Even the message itself

## Project setup

- [api_template_for_vitruvius](https://github.com/antonpichka/template_for_vitruvius#api_template_for_vitruvius)

### api_template_for_vitruvius

- If you need to change the application name from 'api_template_for_vitruvius' to 'api_${your_name}':
- - 'api_template_for_vitruvius/app/package.json':
- - - '"name": "api_template_for_vitruvius"'

#### Docker

- Here are the docker commands for .dev and .prod

##### Dev

- docker-compose -f docker-compose.dev.yml up --build
- docker-compose -f docker-compose.dev.yml down

##### Prod

- docker-compose -f docker-compose.prod.yml up --build
- docker-compose -f docker-compose.prod.yml down