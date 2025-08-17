//  Portfolio Store
import axios from 'axios';
import { defineStore } from 'pinia';
import { computed } from 'vue';

const portfolio = defineStore('portfolio', 
    {
        state: () => (
            {
                data:
                {
                    current: 1,
                    total : null,
                    isLoaded: false,
                    repositories: [],
                    
                },
            }),
            actions: {
                addToStore(repository)
                {

                    const repo = this.splitName(repository);
                    const repositories = this.data.repositories;
                    repositories.push(repo);
                },
                splitName(repository)
                {
                    return repository.name.split('-');
                },
                async fetchData()
                {
                    try
                    {
                        const response = await axios.get('https://api.github.com/users/USERNAME/repos');
                        response.data.forEach(repo => this.addToStore(repo));
                    }
                    catch (error)
                    {
                        console.error('Error fetching data:', error);
                    }
                }
            },
            getters: {
                isLoaded: (state) => state.data.isLoaded,
                repositories: (state) => state.data.repositories,
                displayRepositories: (state) => (filter, start, end, n = 9) =>
                    {
                        const n = state.data.repositories.length;
                        const repositories = state.data.repositories;

                        if (!state.data.isLoaded) return false;
                        if (filter.name) return repositories.filter(item => item.name.includes(filter.name.toLowerCase()));

                        const end = (start * n);
                        const start = (start-1) * n;

                        const data = repositories.slice(start, end);
                        return data;

                    }
            }
    })