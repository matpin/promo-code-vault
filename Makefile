# Default target
.PHONY: help
help:
	@echo "Available commands:"
	@echo "  make install        Install dependencies"
	@echo "  make lint           Run linter"
	@echo "  make lint-fix       Run linter with --fix"
	@echo "  make dev            Start development server"

install:
	npm install

lint:
	npm run lint

lint-fix:
	npm run lint:fix

dev:
	npm run dev
