dependencies {
    api("org.springframework.boot", "spring-boot-starter-web")
}

val pkg by tasks.creating(Copy::class) {
    group = "build"
    into("$buildDir/package")
    from("$rootDir/webapp/build") {
        into("webapp")
    }
}