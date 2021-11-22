export interface Resource {
  title: string
  desc: string
  url: string
}

export interface ResourceCategory {
  title: string
  resources: Resource[]
}
