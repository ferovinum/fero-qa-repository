package com.ferovinum.repository;

import com.ferovinum.model.Client;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ClientRepository extends JpaRepository<Client, String> {
} 