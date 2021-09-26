buildscript {
    repositories {
        mavenCentral()
    }
    dependencies {
        val kotlinVersion: String by project
        classpath(kotlin("gradle-plugin", kotlinVersion))
        val springBootVersion: String by project
        classpath("org.springframework.boot:spring-boot-gradle-plugin:${springBootVersion}")
    }
}

plugins {
    java
    idea
    id("com.github.node-gradle.node").version("3.1.1")
}

group = "me.xzhuangaa"
version = "1.0-SNAPSHOT"

node {
    download.set(false)
    nodeProjectDir.set(file("$rootDir/webapp"))
}

allprojects {
    group = "me.xzhuangaa"
    version = "1.0.0"

    repositories {
        mavenCentral()
    }

    apply(plugin = "kotlin")
    apply(plugin = "idea")
    apply(plugin = "application")
    apply(plugin = "org.springframework.boot")
    apply(plugin = "io.spring.dependency-management")

    java {
        targetCompatibility = JavaVersion.VERSION_11
        sourceCompatibility = JavaVersion.VERSION_11
    }

    sourceSets {
        main {
            java.srcDir("src/main/kotlin")
        }
    }

    tasks.withType<org.jetbrains.kotlin.gradle.tasks.KotlinCompile>().all {
        kotlinOptions {
            jvmTarget = JavaVersion.VERSION_11.toString()
        }
    }

    dependencies {
        if(project.name != "commons") {
            implementation(project(":commons"))
        }
    }
}

val webDist by tasks.creating(com.github.gradle.node.npm.task.NpmTask::class) {
    group = "build"
    npmCommand.set(listOf("run", "build"))
}

//subprojects.find { it.name == "pichi-server" }!!.tasks.getByName("pkg") {
//    dependsOn(webDist)
//}