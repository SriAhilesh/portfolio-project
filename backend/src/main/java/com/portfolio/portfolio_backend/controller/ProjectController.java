package com.portfolio.portfolio_backend.controller;

import com.portfolio.portfolio_backend.model.Project;
import com.portfolio.portfolio_backend.repository.ProjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/projects")
@CrossOrigin(origins = "*") // allow frontend to access
public class ProjectController {

    @Autowired
    private ProjectRepository projectRepository;

    // GET all projects
    @GetMapping
    public List<Project> getAllProjects() {
        return projectRepository.findAll();
    }

    // POST a new project
    @PostMapping
    public Project createProject(@RequestBody Project project) {
        return projectRepository.save(project);
    }
}
