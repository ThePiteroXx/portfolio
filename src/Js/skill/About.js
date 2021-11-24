import * as THREE from 'three'

import Stats from '../Utils/Stats.js'
import Time from '../Utils/Time.js'

import Sizes from './Sizes.js'
import World from './World.js'
import LoadingScreen from '../Loading/LoadingScreen.js'

import Renderer from './Renderer.js'

export default class About
{

    static instance

    constructor(targetElement)
    {
        
        if(About.instance)
        {
            return About.instance
        }
        About.instance = this

        this.targetElement = targetElement
        

        if(!this.targetElement)
        {
            console.warn('Missing \'targetElement\' property')
            return
        }

        this.sizes = new Sizes()
        this.time = new Time()
        this.loadingScreen = new LoadingScreen()
        this.setConfig()
        this.setStats()
        this.setScene()
        this.setCamera()
        this.setRenderer()
        this.setResources()
        this.setWorld()

        this.sizes.on('resize', () =>
        {
            this.resize()
        })

        this.update()
    }

    init()
    {
        this.sizes = new Sizes()
        this.time = new Time()
        this.setConfig()
        this.setStats()
        this.setScene()
        this.setCamera()
        this.setRenderer()
        this.setResources()
        this.setWorld()

        this.sizes.on('resize', () =>
        {
            this.resize()
        })

        this.update()
    }
    
    setConfig()
    {
        this.config = {}

        this.config.pixelRatio = Math.min(Math.max(window.devicePixelRatio, 1), 2)

        this.config.width = this.sizes.width
        this.config.height = this.sizes.height
        
        this.config.debug = this.config.width > 420
    }

    setStats()
    {
        if(this.config.debug)
        {
            this.stats = new Stats(false)
        }
    }

    setScene()
    {
        this.scene = new THREE.Scene()
    }

    setCamera()
    {
        this.camera = new THREE.PerspectiveCamera(45, this.config.width / this.config.height, 0.1, 100)
        this.camera.position.x = 0
        this.camera.position.y = 0.3
        this.camera.position.z = 7

        this.scene.add(this.camera)
    }

    setRenderer()
    {
        this.renderer = new Renderer()
    }

    setResources()
    {
        this.resources = this.loadingScreen.resources
    }

    setWorld()
    {
        this.world = new World()
    }


    update()
    {
        this.renderer.update()

        if(this.world)
            this.world.update()

        window.requestAnimationFrame(() =>
        {
            this.update()
        })
    }

    resize()
    {
        // Update sizes
        this.config.width = this.sizes.width
        this.config.height = this.sizes.height

        // Update camera
        this.camera.aspect = this.config.width / this.config.height
        this.camera.updateProjectionMatrix()
        
        // Update renderer
        if(this.renderer)
            this.renderer.resize()

    }

    destructor()
    {
        this.time.off('tick')
        this.sizes.off('resize')

        this.renderer.destroy()
        this.world.destroy()
    }
}